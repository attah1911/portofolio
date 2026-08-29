import CareerTimeline from '@/components/display/Timeline/Career';

import Catalog, { CatalogProps } from '@/components/modules/Catalog';
import { cn } from '@/utils/cn';
import { useIntlayer } from 'next-intlayer/server';

export type CareerCatalogProps = Omit<CatalogProps, 'items'>;

export const CareerCatalog = ({ className, ...props }: CareerCatalogProps) => {
  const t = useIntlayer('career-catalog');
  const cardT = useIntlayer('career-card');
  const isEmpty = t.items.length == 0;

  return (
    <Catalog
      className={cn('w-full max-w-6xl', className)}
      {...props}
    >
      {isEmpty && (
        <Catalog.Empty className='flex min-h-32 w-full items-center justify-center border bg-body p-5 text-center'>
          {t.empty}
        </Catalog.Empty>
      )}

      {!isEmpty && (
        <Catalog.List asChild>
          <CareerTimeline>
            {t.items.slice(0, 3).map((el, i) => (
              <CareerTimeline.Item
                key={el.id as string}
                index={i}
                item={{
                  id: el.id as string,
                  title: el.title,
                  text: el.text,
                  roles: Array.from(el.roles as unknown as string[]).map(String),
                  start: el.start,
                  end: el.end,
                  noEnd: cardT.noEnd as string
                }}
              />
            ))}
          </CareerTimeline>
        </Catalog.List>
      )}
    </Catalog>
  );
};

import { pipe, entries, map, toArray } from '@fxts/core';
import { Colors } from '../../../../tokens';
import { themeClass, colorVariants } from '../../../../vanilla-extract/index.css';
import { ButtonSample } from '@/components/ButtonSample';

export const Page = () => {
  return (
    <main className={themeClass}>
      <div className="flex gap-4">
        <ButtonSample variant="primary_fill" height={32} borderRadius={12}>
          테스트
        </ButtonSample>
        <ButtonSample variant="primary_fill" height={32} borderRadius={12} disabled>
          테스트
        </ButtonSample>
      </div>
      <div className="flex gap-4">
        <ButtonSample variant="primary_stroke" height={32} borderRadius={12}>
          테스트
        </ButtonSample>
        <ButtonSample variant="primary_stroke" height={32} borderRadius={12} disabled>
          테스트
        </ButtonSample>
      </div>
      <div className="flex gap-4">
        <ButtonSample variant="secondary_fill" height={32} borderRadius={12}>
          테스트
        </ButtonSample>
        <ButtonSample variant="secondary_fill" height={32} borderRadius={12} disabled>
          테스트
        </ButtonSample>
      </div>

      <div>
        {pipe(
          Colors,
          entries,
          map(([key, value]) => {
            return (
              <div key={key as keyof typeof Colors} className="flex items-center">
                <div className="w-[80px] h-[80px] mr-24" style={{ backgroundColor: value }} />
                <div className="flex flex-col">
                  <p>{key}</p>
                  <p>{value}</p>
                </div>
              </div>
            );
          }),
          toArray,
        )}
      </div>
    </main>
  );
};

export default Page;

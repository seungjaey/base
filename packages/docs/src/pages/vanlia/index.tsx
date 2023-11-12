import { themeClass, button, ButtonVariants } from '@/css/app.css';
import { VanillaButton } from '@/components/VanillaButton';
import { pipe, map, toArray, keys } from '@fxts/core';

type Props = ButtonVariants & {
  // color: 'primary' | 'secondary' | 'tertiary' | 'danger';
};

const ButtonVariantSection = ({ color, type, shape }: Props) => {
  return (
    <section className="flex flex-col gap-4 mb-4">
      <ul>
        <li className="flex gap-4">
          <VanillaButton color={color} size="xl" shape={shape} type={type}>
            Button
          </VanillaButton>
          <VanillaButton color={color} size="xl" shape={shape} type={type} buttonProps={{ disabled: true }}>
            Button
          </VanillaButton>
        </li>
      </ul>
      <ul>
        <li className="flex gap-4">
          <VanillaButton color={color} size="lg" shape={shape} type={type}>
            Button
          </VanillaButton>
          <VanillaButton color={color} size="lg" shape={shape} type={type} buttonProps={{ disabled: true }}>
            Button
          </VanillaButton>
        </li>
      </ul>
      <ul>
        <li className="flex gap-4">
          <VanillaButton color={color} size="md" shape={shape} type={type}>
            Button
          </VanillaButton>
          <VanillaButton color={color} size="md" shape={shape} type={type} buttonProps={{ disabled: true }}>
            Button
          </VanillaButton>
        </li>
      </ul>
      <ul>
        <li className="flex gap-4">
          <VanillaButton color={color} size="sm" shape={shape} type={type}>
            Button
          </VanillaButton>
          <VanillaButton color={color} size="sm" shape={shape} type={type} buttonProps={{ disabled: true }}>
            Button
          </VanillaButton>
        </li>
      </ul>
    </section>
  );
};

export const Page = () => {
  return (
    <main className={themeClass}>
      {pipe(
        keys(button.classNames.variants.color),
        map((colorKey) => (
          <>
            <div className="flex flex-row gap-4">
              <ButtonVariantSection key={colorKey} color={colorKey} type="fill" shape="square" />
              <ButtonVariantSection key={colorKey} color={colorKey} type="stroke" shape="square" />
              <ButtonVariantSection key={colorKey} color={colorKey} type="tender" shape="square" />
            </div>
            <div className="flex flex-row gap-4">
              <ButtonVariantSection key={colorKey} color={colorKey} type="fill" shape="round" />
              <ButtonVariantSection key={colorKey} color={colorKey} type="stroke" shape="round" />
              <ButtonVariantSection key={colorKey} color={colorKey} type="tender" shape="round" />
            </div>
          </>
        )),
        toArray,
      )}
    </main>
  );
};

export default Page;

import { tv } from 'tailwind-variants';

export const statCard = tv({
  slots: {
    base: 'fragment-stat-card',
    top: 'fragment-stat-card__top',
    label: 'fragment-stat-card__label',
    help: 'fragment-stat-card__help',
    icon: 'fragment-stat-card__icon',
    valueRow: 'fragment-stat-card__value-row',
    value: 'fragment-stat-card__value',
    delta: 'fragment-stat-card__delta',
    hint: 'fragment-stat-card__hint',
    skeleton: 'fragment-stat-card__skeleton',
  },
  variants: {
    emphasis: {
      true: { base: 'fragment-stat-card--emphasis' },
    },
    sentiment: {
      positive: { delta: 'fragment-stat-card__delta--positive' },
      negative: { delta: 'fragment-stat-card__delta--negative' },
      neutral: { delta: 'fragment-stat-card__delta--neutral' },
    },
  },
});

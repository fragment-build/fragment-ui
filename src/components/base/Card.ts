import { Card as HeroCard } from '@heroui/card';
import { withFragment } from '../../withFragment';

export const Card = withFragment(HeroCard, 'card');
export { CardBody, CardFooter, CardHeader } from '@heroui/card';

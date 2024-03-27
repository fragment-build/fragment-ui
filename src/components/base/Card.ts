import { Card as NextCard } from '@nextui-org/react';
import { withFragment } from '../../withFragment';

export const Card = withFragment(NextCard, 'card');
export { CardBody, CardFooter, CardHeader } from '@nextui-org/react';

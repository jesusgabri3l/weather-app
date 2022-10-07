import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';

import BaseInfoAlert from '../../components/base/BaseInfoAlert';

it('BaseInfo Alert', () => {
  render(<BaseInfoAlert title="Some test title" description="Some test description" />);
  const title = screen.getByTestId('title');
  const description = screen.getByTestId('description');
  const alertWrapper = screen.getByRole('alert');
  expect(alertWrapper).not.toBeEmptyDOMElement;
  expect(alertWrapper).toContainElement(title);
  expect(alertWrapper).toContainElement(description);
  expect(alertWrapper).toHaveClass('bg-blue-100');

  expect(title).toHaveTextContent('Some test title');
  expect(description).toHaveTextContent('Some test description');
});

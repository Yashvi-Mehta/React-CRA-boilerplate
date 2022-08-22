import { screen } from '@testing-library/react';

import { renderWithClient } from './utils/renderWithClient';
import App from './App';

// jest.mock('@okta/okta-react', () => {
//   return ({
//     useOktaAuth: () => ({
//       authState: {isAuthenticated: true},
//       authService: {handleAuthentication: jest.fn()},
//       oktaAuth: {getUser: () => new Promise((resolve, reject) => { resolve('foo')})},
//     }),
//     withOktaAuth: (x: any) => x,
//     Security: () => <div></div>,
//     SecureRoute: () => <div></div>,
//     LoginCallback: () => <div></div>
//   });
// });

// jest.mock('@okta/okta-react', () => ({
//   useOktaAuth: () => ({
//     authState: { isAuthenticated: true},
//     authService: { handleAuthentication: jest.fn() }
//   })
// }));

test('renders learn react link', () => {
  renderWithClient({ ui: <App /> });
  const linkElement = screen.getByText(/react/i);
  expect(linkElement).toBeInTheDocument();
});

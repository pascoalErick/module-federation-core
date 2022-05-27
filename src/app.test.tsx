import { act, render } from "@testing-library/react";
import App from "./App";

describe(`<App />`, () => {
  it(`should render correctly`, async () => {
    await act(async () => {
      render(<App />);
    });
  });
});

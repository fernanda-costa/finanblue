import { Order } from './cart.model';

describe('Cart', () => {
  it('should create an instance', () => {
    expect(new Order()).toBeTruthy();
  });
});

import { Request, Response } from 'express';
import sayHello from './sayHelloWorld';

describe('Get "Hello" string', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let responseObj = {};

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      statusCode: 0,
      send: jest.fn().mockImplementation(result => {
        responseObj = result;
      })
    };
  })

  test('Hello string', () => {
    const expectedStatusCode = 200;
    const ExpectedResponse = {data: 'Hello'};

    sayHello(mockRequest as Request, mockResponse as Response);

    expect(mockResponse.statusCode).toBe(expectedStatusCode);
    expect(responseObj).toEqual(ExpectedResponse);
  })
})
class CustomError extends Error {
    constructor(message, status) {
      super();
      this.message = message;
      this.status = status;
    }
  }

// 404 error - when route is not found
class NotFoundError extends CustomError {
    constructor(message="Not Found") {
      super(message, 404);
    }
  }


// 400 error - conflicting with database
class BadRequestError extends CustomError {
    constructor(message = "Bad Request") {
      super(message, 400);
    }
  }

  // 401 error for requests to unauthorized requests
  class UnauthorizedError extends CustomError {
  constructor(message = "Unauthorized") {
    super(message, 401);
  }
}


  

  module.exports={
      CustomError,  
      NotFoundError,
      BadRequestError    
  }
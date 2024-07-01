## API Documentation

### User Registration
- Method: POST
- Endpoint: `/api/auth/register`
- Request Body:
    - `email` (string): The email of the user.
    - `password` (string): The password of the user.
- Response:
    - Status: 201 (Created)
    - Body: "User registered"

### User Login
- Method: POST
- Endpoint: `/api/auth/login`
- Request Body:
    - `email` (string): The email of the user.
    - `password` (string): The password of the user.
- Response:
    - Status: 200 (OK)
    - Body: JSON object containing a JWT token

### Add Timeline
- Method: POST
- Endpoint: `/api/timelines`
- Authentication: Required
- Request Body:
    - `date` (string): The date of the timeline event.
    - `description` (string): The description of the timeline event.
- Response:
    - Status: 201 (Created)
    - Body: "Timeline added"

### Get Timelines
- Method: GET
- Endpoint: `/api/timelines`
- Authentication: Required
- Response:
    - Status: 200 (OK)
    - Body: Array of timeline objects


// In ‘Raining Trivia,’ a real-time trivia game, I worked on the backend using Node.js. My main job was to manage the server-side logic to ensure smooth gameplay. The server handled all game logic, managed user sessions, and enabled real-time communication between players and the server for a responsive experience.

// I built the server using Node.js, Express, and SQL. Node.js's non-blocking nature was great for handling many connections at once. Express helped manage routing and APIs, and SQL managed relational data like user profiles, game sessions, and leaderboard stats. This setup allowed efficient data handling and quick retrieval, ensuring the game could handle complex operations during high traffic.

// My work included creating the core game logic, serving questions to players, validating answers, and updating scores. I also developed a “flood” mechanic to increase game difficulty after incorrect answers, adding depth to gameplay. Real-time communication was enabled through WebSockets, providing immediate feedback to players, keeping the leaderboard updated, and managing multiplayer states seamlessly. The server also handled session persistence so players could continue from where they left off even after a disconnect.

// Handling high traffic and maintaining data consistency were significant challenges. I optimized the Node.js event loop and implemented load balancing to ensure responsiveness during peak hours. For data integrity, I used SQL transactions to update scores and game states atomically, preventing inconsistencies when multiple players answered simultaneously. Security was a top priority, so I implemented JWT for secure authentication, input validation to prevent SQL injection, and encrypted WebSocket communication to prevent tampering and ensure a fair gaming environment.

// The server implementation was successful, handling high traffic and real-time interactions that kept players engaged. The architecture supported large-scale multiplayer gameplay, and the security measures safeguarded data, providing a reliable and enjoyable experience. This project was an excellent opportunity to refine my skills in server-side development, real-time communication, and security, allowing me to create a robust and secure gaming environment.


// Backend Architecture
// Question: How did you handle scalability in the backend system for Raining Trivia? Answer:
// I used a modular architecture, separating services such as authentication, game logic, and notifications into independent modules. The database was optimized using indexing on frequently queried fields, such as question category and level. I also implemented caching with Redis to minimize database load for repetitive queries, like fetching frequently played categories.

// Question: How did you manage concurrency in multiplayer mode?
// Answer:
// I utilized WebSockets to enable real-time communication between players. A server-side game manager maintained the game state, and I used a locking mechanism to ensure consistency when multiple players updated the same game session simultaneously.

// Database Design
// Question: How did you design the database schema to handle 50,000+ trivia questions efficiently?
// Answer:
// I normalized the schema into separate tables for questions, categories, levels, and subcategories, with foreign key relationships. Indexing was added on frequently queried fields like category_id and level. To enhance read performance, I partitioned the database based on categories.

// Question: How did you ensure data integrity in the in-game shop transactions?
// Answer:
// I used database transactions to ensure atomicity for all purchases. If any step in the purchase process failed (e.g., updating user balance or deducting stock), the entire transaction would roll back, ensuring consistency.

// Authentication
// Question: What security measures did you implement for OAuth authentication?
// Answer:
// I used secure libraries for OAuth token generation and validation, implemented HTTPS for secure communication, and stored tokens securely using encryption. Additionally, I followed best practices like short token lifetimes and implemented refresh tokens for extended sessions.

// Question: How did you implement password recovery securely?
// Answer:
// Password recovery involved generating a one-time, time-limited token, stored in the database in a hashed form. The token was sent to the user via email. I used HTTPS to secure the recovery link and ensured token expiry after 15 minutes or upon use.

// Game Features
// Question: How did you implement the leaderboard functionality?
// Answer:
// I used a sorted set in Redis to store user scores for fast retrieval and ranking. The sorted set allowed efficient updates and queries, such as fetching the top N players or the rank of a specific user, with O(log N) complexity.

// Question: How did you automate tournament creation using cron jobs?
// Answer:
// I implemented a cron job using Node.js and the node-cron library to schedule periodic tasks. The job fetched upcoming tournaments from the database, checked for prerequisites like available questions, and created tournament entries in the database.

// File Uploads and AWS Integration
// Question: How did you validate data during CSV uploads?
// Answer:
// I validated data using a two-step process:

// Client-Side: Basic validation for file format and size.
// Server-Side: Parsed the CSV using a library like csv-parser and validated each record for required fields, data types, and constraints. Invalid records were logged and returned to the user for correction.
// Question: How did you integrate AWS S3 for image storage?
// Answer:
// I used the AWS SDK to upload images directly to an S3 bucket. Each image was assigned a unique identifier to avoid naming conflicts. I configured the bucket with proper access policies and enabled versioning for better data management.

// Performance Optimization
// Question: What steps did you take to optimize application performance?
// Answer:
// I used lazy loading and pagination for large datasets, optimized database queries with indexing, and introduced caching for frequent operations using Redis. Additionally, I minimized the payload size by implementing data compression for API responses.

// Question: How did you handle high traffic during peak times?
// Answer:
// I employed load balancing with multiple backend instances to distribute traffic. Horizontal scaling was implemented using containerized services with Docker, orchestrated by Kubernetes to ensure seamless scaling during high loads.

// State Management
// Question: How did Redux improve the application's state management?
// Answer:
// Redux provided a single source of truth, which helped manage complex application states, such as the multiplayer game status and user data. I utilized middleware like Redux Thunk for handling asynchronous operations, such as API calls.
// Notifications
// Question: How did you implement tournament notifications?
// Answer:
// I used a combination of real-time push notifications (via WebSockets) and email notifications for users who were offline. Notification preferences were stored in the database, allowing users to opt in or out.

// Question: How did you ensure timely delivery of notifications?
// Answer:
// I implemented a message queue using RabbitMQ to handle high notification volumes and ensure retries in case of failures. This also decoupled notification processing from the main application logic.
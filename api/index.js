import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {console.log('MongoDb is connected');})
  .catch((err) => {
      console.log(err);
});

const __dirname = path.resolve();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use("/api/comment", commentRoutes);

const distPath = path.join(__dirname, '..', 'client', 'dist');
app.use(express.static(distPath));

app.use((req, res, next) => {
  // Only handle frontend paths that are NOT API
  if (!req.path.startsWith('/api') && !path.extname(req.path)) {
    res.sendFile(path.join(distPath, 'index.html'));
  } else {
    next();
  }
});


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
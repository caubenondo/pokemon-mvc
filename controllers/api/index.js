const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commenRoutes = require('./commentRoutes')

// API routes
router.use('/users', userRoutes);
router.use('/posts',postRoutes)
router.use('/comments',commenRoutes)

module.exports = router;

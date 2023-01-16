const express = require("express");
const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Routes
app.use("/api/movies", require("./routes/movies"));
app.use("/api/comments", require("./routes/comments"));

// start the serve
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

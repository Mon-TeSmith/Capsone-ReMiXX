const { Reply, Comment } = require("../models/Comment");
const express = require("express");
const router = express.Router();
const { validateComment } = require("../middleware/validateComment");

router.get("/:videoId", async (req, res) => {
  const comments = await Comment.find({ videoId: req.params.videoId });
  return res.send(comments);
});

router.post("/:commentId/replies", async (req, res) => {
  let comment = await Comment.findById(req.params.commentId);

  const reply = new Reply({
    text: req.body.text,
    replies: req.body.replies,
  });
  comment.replies.push(reply);

  await comment.save();
  return res.send(comment);
});

router.post("/", [validateComment], async (req, res) => {
  try {
    const comment = new Comment({
      text: req.body.text,
      videoId: req.body.videoId,
    });
    await comment.save();

    return res.send(comment);
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});

router.put("/:commentId", async (req, res) => {
  const comment = await Comment.findByIdAndUpdate(
    req.params.commentId,
    {
      ...req.body,
    },
    { new: true }
  );
  return res.send(comment);
});

module.exports = router;

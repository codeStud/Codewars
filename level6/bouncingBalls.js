// My Solution
function bouncingBall(h, bounce, window) {
  if (bounce <= 0 || bounce >= 1 || h <= 0 || window >= h) {
    return -1;
  }

  // mother sees the ball falling down for the first time
  let count = 1;
  // ball hit the ground and it's reboud become 'bounce' times the current h
  let rebound = h * bounce;
  while (rebound > window) {
    // mother can still see the ball, once while going up, then while coming down
    count += 2;
    // again, when the ball hits the ground, rebound become 'bounce' time rebound
    rebound = rebound * bounce;
  }

  return count;
}


INSERT INTO trackers 


SET distance = "1 mile",
minutes = 8,
seconds = 42,
date = "2017-06-15",
createdAt = NOW(),
updatedAt = NOW(),
UserId =  (SELECT id FROM users
  WHERE id = 1);
  


INSERT INTO trackers 


SET distance = "2 miles",
minutes = 12,
seconds = 15,
date = "2017-06-16",
createdAt = NOW(),
updatedAt = NOW(),
UserId =  (SELECT id FROM users
  WHERE id = 1);
  



INSERT INTO trackers 


SET distance = "5K",
minutes = 22,
seconds = 06,
date = "2017-06-17",
createdAt = NOW(),
updatedAt = NOW(),
UserId =  (SELECT id FROM users
  WHERE id = 1);





INSERT INTO trackers 


SET distance = "10K",
minutes = 40,
seconds = 57,
date = "2017-06-17",
createdAt = NOW(),
updatedAt = NOW(),
UserId =  (SELECT id FROM users
  WHERE id = 3);

  
  
  select * from Trackers;
Test.assertEquals(checkCoupon('123','123','September 5, 2014','October 1, 2014'), true);
Test.assertEquals(checkCoupon('123a','123','September 5, 2014','October 1, 2014'), false);
Test.assertEquals(checkCoupon('12abcd3','12abcd3','January 5, 2014','January 1, 2014'), false);
Test.assertEquals(checkCoupon('123ablqc0','123ablqc0','July 5, 2000','July 5, 2000'), true);
Test.assertEquals(checkCoupon('abc','abc','November 8, 2013','November 5, 2014'), true);
Test.assertEquals(checkCoupon(0,false,'September 5, 2014','September 25, 2014'), false);
Test.assertEquals(checkCoupon(1,true,'September 5, 2014','September 25, 2014'), false);
Test.assertEquals(checkCoupon(1+1,'2','September 5, 2014','September 25, 2014'), false);
Test.assertEquals(checkCoupon('a12v564','a12v564','March 5, 1998','March 25, 1998'), true);

package com.lambdarat.pbt

import munit.ScalaCheckSuite
import org.scalacheck._
import org.scalacheck.Prop._

class SumProperties extends ScalaCheckSuite {

  test("Sum commutativity") {
    forAll { (x: Int, y: Int) =>
      val sum         = x + y
      val reversedSum = y + x

      assertEquals(sum, reversedSum)
    }
  }

  test("Sum associativity") {
    forAll { (x: Int, y: Int, z: Int) =>
      val firstPairSum  = (x + y) + z
      val secondPairSum = x + (y + z)

      assertEquals(firstPairSum, secondPairSum)
    }
  }

  test("Sum identity") {
    forAll { x: Int =>
      val sumZero  = x + 0
      val expected = x

      assertEquals(sumZero, expected)
    }
  }

}

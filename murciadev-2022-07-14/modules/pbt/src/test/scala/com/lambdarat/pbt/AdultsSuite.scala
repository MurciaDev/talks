package com.lambdarat.pbt

import munit.ScalaCheckSuite
import org.scalacheck._
import org.scalacheck.Prop._

import Adults._

class AdultsSuite extends ScalaCheckSuite {

  val youngsGen = for {
    name <- Gen.stringOfN(25, Gen.alphaChar)
    age  <- Gen.chooseNum(1, 17)
  } yield Person(name, age)

  test("Persons younger than 18 are not adults") {
    forAll(Gen.listOf(youngsGen)) { youngs =>
      val adults   = Adults.adultsFrom(youngs)
      val expected = List.empty

      assertEquals(clue(adults), expected)
    }
  }

}

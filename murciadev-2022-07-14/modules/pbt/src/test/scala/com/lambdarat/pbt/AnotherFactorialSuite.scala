package com.lambdarat.pbt

import munit.FunSuite
import Factorial._

class AnotherFactorialSuite extends FunSuite {

  test("Base case 0 must return 0") {
    val input    = 0
    val expected = 0L
    val result   = input.factorial
    assertEquals(result, expected)
  }

  test("Base case 1 must return 1") {
    val input    = 1
    val expected = 1L
    val result   = input.factorial
    assertEquals(result, expected)
  }

  test("For number 4 must return 24") {
    val input    = 4
    val expected = 24L
    val result   = input.factorial
    assertEquals(result, expected)
  }

  test("Negative number must return 0") {
    val input    = -1
    val expected = 0L
    val result   = input.factorial
    assertEquals(result, expected)
  }

}

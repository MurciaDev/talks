package com.lambdarat.pbt

import munit.FunSuite
import scala.util.Random

import Factorial._

class FactorialSuite extends FunSuite {

  test("Base case 0 must return 0") {
    val input    = 0
    val expected = 0L
    val result   = Factorial.of(input)
    assertEquals(result, expected)
  }

  test("Base case 1 must return 1") {
    val input    = 1
    val expected = 1L
    val result   = Factorial.of(input)
    assertEquals(result, expected)
  }

  test("For number 4 must return 24") {
    val input    = 4
    val expected = 24L
    val result   = Factorial.of(input)
    assertEquals(result, expected)
  }

  test("Negative number must return 0") {
    val input    = -1
    val expected = 0L
    val result   = Factorial.of(input)
    assertEquals(result, expected)
  }

  test("Random number must return its correct factorial") {
    val input    = Random.nextLong(10)
    val expected = input.factorial // What???
    val result   = input.factorial
    assertEquals(result, expected)
  }

}

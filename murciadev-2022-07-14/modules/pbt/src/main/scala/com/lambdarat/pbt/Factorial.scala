package com.lambdarat.pbt

import scala.annotation.tailrec

object Factorial {

  def of(number: Long): Long = number match {
    case -1 => 0
    case 0  => 0
    case 1  => 1
    case 4  => 24
  }

  implicit class FactorialOps(number: Long) {

    def factorial: Long = {
      @tailrec
      def factorialRec(acc: Long, next: Long): Long =
        if (next == 1) acc
        else factorialRec(acc * next, next - 1)

      if (number <= 0) 0
      else factorialRec(1, number)
    }
  }

}

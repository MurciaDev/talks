package com.lambdarat.pbt

object Adults {

  case class Person(name: String, age: Int)

  def adultsFrom(persons: List[Person]): List[Person] =
    persons.filter(_.age > 16)

}

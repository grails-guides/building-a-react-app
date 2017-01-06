package com.example

import grails.rest.Resource

@Resource
class Vehicle {

    String name

    Make make
    Model model

    static belongsTo = [driver: Driver]

    static constraints = {
    }
}

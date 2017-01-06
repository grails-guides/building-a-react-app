package com.example

import grails.rest.Resource

@Resource
class Driver {

    String name

    static hasMany = [ vehicles: Vehicle ]

    static constraints = {
    }

    String toString() {
        name
    }
}

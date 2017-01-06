package com.example

import grails.rest.Resource

@Resource
class Model {

    String name

    static constraints = {
    }

    String toString() {
        name
    }
}

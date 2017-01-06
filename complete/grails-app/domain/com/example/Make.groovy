package com.example

import grails.rest.Resource

@Resource
class Make {

    String name

    static constraints = {
    }

    String toString() {
        name
    }
}

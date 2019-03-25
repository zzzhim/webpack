import _ from "lodash"
import $ from "jquery"

const dom = $('<div>')
dom.html(_.join(['zzz', 'him'], '-'))
$('body').append(dom)
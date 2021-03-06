/* eslint-disable no-unused-vars */

define(function() {
    /**
     * 查找第一个匹配的元素
     * @param {string} ele - 选择器
     */
    function $(ele) {
        return document.querySelector(ele)
    }

    /**
     * 查找所有匹配的元素
     * @param {string} ele - 选择器
     */
    function $a(ele) {
        return document.querySelectorAll(ele)
    }

    /**
     * 判断坐标点是否在列表中
     * @param {object} point - 坐标点
     * @param {array} list - 列表
     * @return {boolean}
     */
    function inList(point, list) {
        return list.some(function(item) {
            return item.x === point.x && item.y === point.y
        })
    }

    /**
     * 判断坐标点是否在列表中
     * @param {object} point - 坐标点
     * @param {array} list - 列表
     * @return {boolean}
     */
    function getTargetIndex(target, list) {
        for (var i = 0, len = list.length; i < len; i++) {
            var item = list[i]
            if (item.x === target.x && item.y === target.y) {
                return i
            }
        }
    }

    /**
     * 根据指定属性值降序排列数组
     * @param {string} property - 属性
     * @return {boolean}
     */
    function comparisonByProperty(property) {
        return function (object1, object2) {
            return object2[property] - object1[property]
        }
    }

    /**
     * 事件绑定函数，兼容浏览器差异
     */
    function addEvent(element, event, listener) {
        if (element.addEventListener) {
            element.addEventListener(event, listener, false)
        } else if (element.attachEvent) {
            element.attachEvent('on' + event, listener)
        } else {
            element['on' + event] = listener
        }
    }

    return {
        $: $,
        $a: $a,
        inList: inList,
        addEvent: addEvent,
        getTargetIndex: getTargetIndex,
        comparisonByProperty: comparisonByProperty,
    }
})

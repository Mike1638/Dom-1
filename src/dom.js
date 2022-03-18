// window.dom = {};
// dom.create = function () {};

// 简化至下面的代码

// window.dom = {
//     create: function () {}
// }

// 简化至下面的代码

// window.dom = {
//     create() {}
// }

window.dom = {
    // *******新增******
    // 创建节点
    create(string) {
        const container = document.createElement('template');
        container.innerHTML = string.trim();
        return container.content.firstChild;
    },
    // 新增弟弟
    after(node, nownode) {
        node.parentNode.insertBefore(nownode, node.nextSibling)
    },
    // 新增哥哥
    before(node, nownode) {
        node.parentNode.insertBefore(nownode, node)
    },
    // 新增儿子
    append(parent, child) {
        parent.appendChild(child)
    },
    // 新增爸爸
    wrap(parent, child) {
        dom.before(parent, child)
        dom.append(child, parent)
    },

    // *****删除*****
    // 删除节点
    remove(node) {
        node.parerntNode.removeChild(node)
        return node // 保留节点引用
    },
    //  删除后代
    empty(node) {
        // 此方法不可用 循环时childrenNodes.length会发生改变
        // const childrenNodes = node.childNodes;
        // const array = [];
        // for (let i = 0; i < childrenNodes.length; i++) {
        //     dom.remove(childrenNodes[i]);
        //     array.push(childrenNodes[i])
        // }
        // return array

        // 总是找到节点的第一个孩子并将它删除
        const array = [];
        let x = node.firstChild;
        while (x) {
            array.push(dom.remove(node.firstChild));
        }
        return array
    },

    // *****改*****
    // 修改属性 读取属性值
    attr(node, name, value) {
        if (arguments.length === 3) {
            node.setAttribute(name, value);
        } else if (arguments.length === 2) {
            return node.getAttribute(name)
        }
    },

    // 设置文本内容 读取文本内容
    test(node, string) {
        // 重载
        if (arguments.length === 2) {
            // 适配
            if ('innerText' in node) {
                node.innerText = string;
            } else {
                node.textContent = string;
            }
        } else if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerText;
            } else {
                return node.textContent;
            }
        }
    },

    //设置HTML
    html(node, string) {
        if (arguments.length === 2) {
            node.innerHTML = string;
        } else if (arguments.length) {
            return node.innerHTML
        }
    },

    // 设置样式
    style(node, name, value) {
        if (arguments.length === 3) {
            // dom,style(test,'color','red')
            node.style[name] = value;
        } else if (arguments.length === 2) {
            // dom.style.(test,'color')
            // dom.style.(test,{color:'red'})
            if (typeof name === 'String') {
                return node.style[name]
            } else if (name instanceof Object) {
                for (let key in name) {
                    // console.log(key, value[key]);
                    node.style[key] = name[key]
                }
            }
        }
    },
    // 设置类
    class: {
        add(node, className) {
            node.classList.add(className);
        },
        remove(node, className) {
            node.classList.remove(className)
        },
        has(node, className) {
            return node.classList.contains(className)
        }
    },

    // 设置事件
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn)
    },
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn)
    },


    // *****查*****

    find(selector, scope) {
        return (scope || document).querySelectorAll(selector);
    },
    parent(node) {
        return node.parentNode;
    },
    children(node) {
        return node.children;
    },
    siblings(node) {
        return Array.from(node.parentNode.children).filter(i => i !== node);
    },
    next(node) {
        let x = node.nextSibling;
        while (x && x.nodeType === 3) {
            x = x.nextSibling
        };
        return x;
    },
    previous(node) {
        let x = node.previousSibling;
        while (x && x.nodeType === 3) {
            x = x.previousSibling
        };
        return x;
    },
    //遍历
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    },
    // 排行老几
    index(node) {
        const list = dom.children(node.parentNode);
        for (let i = 0; i < list.length; i++) {
            if (node == list[i]) {
                return i
            }
        }
    }
}
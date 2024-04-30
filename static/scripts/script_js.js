drag()

function delete_edit() {

    let delete_left = document.querySelectorAll('.letf_del')
    delete_left.forEach((item, index) => {
        item.addEventListener('click', () => {
            const formData = new FormData();
            const name = item.getAttribute('data-id');
            formData.append('name', name);
            fetch('/delete', {
                method: 'POST', body: formData,
            })
                .then(response => response.json())
                .then(data => {
                    let left = document.querySelector('.container_left_lists')
                    left.innerHTML = ''
                    data['do'].forEach((item, index) => {
                        left.innerHTML += `<div class="container_left_lists_list list" draggable="true">
                    <img draggable="false" src="../static/icons/3.png" alt="" class="container_left_lists_img">
                    ${item['name']}<div class="edits" >
                    <img draggable="false" src="/static/icons/6.png" data-name="${item['name']}" data-id="${item['id']}" class="left_edit" alt="" style="width: 20px;height: 20px; cursor: pointer;">
                            <img draggable="false" class="letf_del" data-id="${item['id']}" src="/static/icons/7.png" alt="" style="width: 20px;height: 20px; cursor: pointer;">
</div>
                </div>`
                        drag()
                        delete_edit()
                        done()
                    })
                    let center = document.querySelector('.container_center_lists')
                    center.innerHTML = ''
                    data['progress'].forEach((item, index) => {
                        center.innerHTML += `
                    <div class="container_center_lists_list list" draggable="true">
                    <img draggable="false" src="../static/icons/1.png" alt="" class="container_center_lists_img">
                     ${item['name']}<div class="edits" >
                    <img draggable="false" src="/static/icons/6.png" data-name="${item['name']}" data-id="${item['id']}" class="left_edit" alt="" style="width: 20px;height: 20px; cursor: pointer;">
                            <img draggable="false"  class="letf_del" data-id="${item['id']}" src="/static/icons/7.png" alt="" style="width: 20px;height: 20px; cursor: pointer;">
</div>
                </div>`
                        drag()
                        delete_edit()
                        done()
                    })
                    let right = document.querySelector('.container_right_lists')
                    right.innerHTML = ''
                    data['done'].forEach((item, index) => {
                        right.innerHTML += `<div class="container_right_lists_list list" draggable="true">
                    <img draggable="false" src="../static/icons/2.png" alt="" class="container_right_lists_img">
                    ${item['name']}<div class="edits" >
                    <img draggable="false" src="/static/icons/6.png" data-name="${item['name']}" data-id="${item['id']}" class="left_edit" alt="" style="width: 20px;height: 20px; cursor: pointer;">
                            <img draggable="false" class="letf_del" data-id="${item['id']}" src="/static/icons/7.png" alt="" style="width: 20px;height: 20px; cursor: pointer;">
</div>
                </div>`
                        drag()
                        delete_edit()
                        done()

                    })
                })


        })
    })
    edit_edit()

}

function edit_edit() {
    let left_edit = document.querySelectorAll('.left_edit')
    let idee = 0
    madal2 = document.querySelector('.container_madalni2')
    left_edit.forEach((item, index) => {
        item.addEventListener('click', () => {
            let shaha = document.querySelector('.container_madalni_mad_bottom_input2')
            let data = item.getAttribute('data-id')
            shaha.setAttribute('data-id', data)
            document.querySelector('.container_madalni_mad_bottom_input2').value = `${item.getAttribute('data-name')}`
            madal2.style.display = `flex`

        })
    })
    document.querySelector('.container_madalni_mad_bottom_button2').addEventListener('click', () => {
        madal2.style.display = `none`
        const formData = new FormData();
        const name = document.querySelector('.container_madalni_mad_bottom_input2').value;
        formData.append('name', name);
        formData.append('id', document.querySelector('.container_madalni_mad_bottom_input2').getAttribute('data-id'));
        fetch('/edit', {
            method: 'POST', body: formData,
        })
            .then(response => response.json())
            .then(data => {
                let left = document.querySelector('.container_left_lists')
                left.innerHTML = ''
                data['do'].forEach((item, index) => {
                    left.innerHTML += `<div class="container_left_lists_list list" draggable="true">
                    <img draggable="false" src="../static/icons/3.png" alt="" class="container_left_lists_img">
                    ${item['name']}<div class="edits" >
                    <img draggable="false" src="/static/icons/6.png" data-name="${item['name']}" data-id="${item['id']}" class="left_edit" alt="" style="width: 20px;height: 20px; cursor: pointer;">
                            <img draggable="false" class="letf_del" data-id="${item['id']}" src="/static/icons/7.png" alt="" style="width: 20px;height: 20px; cursor: pointer;">
</div>
                </div>`
                    drag()
                    delete_edit()
                })
                let center = document.querySelector('.container_center_lists')
                center.innerHTML = ''
                data['progress'].forEach((item, index) => {
                    center.innerHTML += `
                    <div class="container_center_lists_list list" draggable="true">
                    <img draggable="false" src="../static/icons/1.png" alt="" class="container_center_lists_img">
                     ${item['name']}<div class="edits" >
                    <img draggable="false" src="/static/icons/6.png" data-name="${item['name']}" data-id="${item['id']}" class="left_edit" alt="" style="width: 20px;height: 20px; cursor: pointer;">
                            <img  draggable="false" class="letf_del" data-id="${item['id']}" src="/static/icons/7.png" alt="" style="width: 20px;height: 20px; cursor: pointer;">
</div>
                </div>`
                    drag()
                    delete_edit()
                })
                let right = document.querySelector('.container_right_lists')
                right.innerHTML = ''
                data['done'].forEach((item, index) => {
                    right.innerHTML += `<div class="container_right_lists_list list" draggable="true">
                    <img draggable="false" src="../static/icons/2.png" alt="" class="container_right_lists_img">
                    ${item['name']}<div class="edits" >
                    <img draggable="false" src="/static/icons/6.png" data-name="${item['name']}" data-id="${item['id']}" class="left_edit" alt="" style="width: 20px;height: 20px; cursor: pointer;">
                            <img draggable="false" class="letf_del" data-id="${item['id']}" src="/static/icons/7.png" alt="" style="width: 20px;height: 20px; cursor: pointer;">
</div>
                </div>`
                    drag()
                    delete_edit()
                })
            })


    });


    xmark2 = document.querySelector('.xmark2')
    xmark2.addEventListener('click', () => {
        madal2.style.display = `none`
    })
}

function done() {
    document.querySelector('.container_top_right').addEventListener('click', () => {
        const containerLeftLists = document.querySelectorAll(".container_left_lists .list");
        const names = [];
        containerLeftLists.forEach(list => {
            const name = list.querySelector('.edits img').getAttribute('data-id')
            let json = {'text': name}
            names.push(json);
        });
        const containerCenterLists = document.querySelectorAll(".container_center_lists .list");
        const center = [];
        containerCenterLists.forEach(list => {

            const name = list.querySelector('.edits img').getAttribute('data-id')
            let json = {'text': name}
            center.push(json);
        });
        const containerRightLists = document.querySelectorAll(".container_right_lists .list");
        const right = [];
        containerRightLists.forEach(list => {
            const name = list.querySelector('.edits img').getAttribute('data-id')
            let json = {'text': name}
            right.push(json);
        });
        let jsons = {
            do: names, progress: center, done: right
        }
        fetch('/done', {
            method: 'POST', headers: {
                'Content-Type': 'application/json',
            }, body: JSON.stringify(jsons),
        })
            .then(response => response.json())
            .then(data => {
                let left = document.querySelector('.container_left_lists')
                left.innerHTML = ''
                data['do'].forEach((item, index) => {
                    left.innerHTML += `<div class="container_left_lists_list list" draggable="true">
                    <img draggable="false" src="../static/icons/3.png" alt="" class="container_left_lists_img">
                    ${item['name']}<div class="edits" >
                    <img draggable="false" src="/static/icons/6.png" data-name="${item['name']}" data-id="${item['id']}" class="left_edit" alt="" style="width: 20px;height: 20px; cursor: pointer;">
                            <img draggable="false" class="letf_del" data-id="${item['id']}" src="/static/icons/7.png" alt="" style="width: 20px;height: 20px; cursor: pointer;">
</div>
                </div>`
                    drag()
                    delete_edit()
                })
                let center = document.querySelector('.container_center_lists')
                center.innerHTML = ''
                data['progress'].forEach((item, index) => {
                    center.innerHTML += `
                    <div class="container_center_lists_list list" draggable="true">
                    <img draggable="false" src="../static/icons/1.png" alt="" class="container_center_lists_img">
                     ${item['name']}<div class="edits" >
                    <img draggable="false" src="/static/icons/6.png" data-name="${item['name']}" data-id="${item['id']}" class="left_edit" alt="" style="width: 20px;height: 20px; cursor: pointer;">
                            <img draggable="false" class="letf_del" data-id="${item['id']}" src="/static/icons/7.png" alt="" style="width: 20px;height: 20px; cursor: pointer;">
</div>
                </div>`
                    drag()
                    delete_edit()
                })
                let right = document.querySelector('.container_right_lists')
                right.innerHTML = ''
                data['done'].forEach((item, index) => {
                    right.innerHTML += `<div class="container_right_lists_list list" draggable="true">
                    <img draggable="false" src="../static/icons/2.png" alt="" class="container_right_lists_img">
                    ${item['name']}<div class="edits" >
                    <img draggable="false" src="/static/icons/6.png" data-name="${item['name']}" data-id="${item['id']}" class="left_edit" alt="" style="width: 20px;height: 20px; cursor: pointer;">
                            <img draggable="false" class="letf_del" data-id="${item['id']}" src="/static/icons/7.png" alt="" style="width: 20px;height: 20px; cursor: pointer;">
</div>
                </div>`
                    drag()
                    delete_edit()
                })
            })


    });

}


madal = document.querySelector('.container_madalni')
document.querySelector('.container_madalni_mad_bottom_button').addEventListener('click', () => {
    madal.style.display = `none`
    const formData = new FormData();
    const name = document.querySelector('.container_madalni_mad_bottom_input').value;
    formData.append('name', name);
    fetch('/add', {
        method: 'POST', body: formData,
    })
        .then(response => response.json())
        .then(data => {
            let left = document.querySelector('.container_left_lists')
            left.innerHTML = ''
            data['do'].forEach((item, index) => {
                left.innerHTML += `<div class="container_left_lists_list list" draggable="true">
                    <img draggable="false" src="../static/icons/3.png" alt="" class="container_left_lists_img">
                    ${item['name']}<div class="edits" >
                    <img draggable="false" src="/static/icons/6.png" data-name="${item['name']}" data-id="${item['id']}" class="left_edit" alt="" style="width: 20px;height: 20px; cursor: pointer;">
                            <img draggable="false" class="letf_del" data-id="${item['id']}" src="/static/icons/7.png" alt="" style="width: 20px;height: 20px; cursor: pointer;">
</div>
                </div>`
                drag()
                delete_edit()
            })
            let center = document.querySelector('.container_center_lists')
            center.innerHTML = ''
            data['progress'].forEach((item, index) => {
                center.innerHTML += `
                    <div class="container_center_lists_list list" draggable="true">
                    <img draggable="false" src="../static/icons/1.png" alt="" class="container_center_lists_img">
                     ${item['name']}<div class="edits" >
                    <img draggable="false" src="/static/icons/6.png" data-name="${item['name']}" data-id="${item['id']}" class="left_edit" alt="" style="width: 20px;height: 20px; cursor: pointer;">
                            <img draggable="false" class="letf_del" data-id="${item['id']}" src="/static/icons/7.png" alt="" style="width: 20px;height: 20px; cursor: pointer;">
</div>
                </div>`
                drag()
                delete_edit()
            })
            let right = document.querySelector('.container_right_lists')
            right.innerHTML = ''
            data['done'].forEach((item, index) => {
                right.innerHTML += `<div class="container_right_lists_list list" draggable="true">
                    <img draggable="false" src="../static/icons/2.png" alt="" class="container_right_lists_img">
                    ${item['name']}<div class="edits" >
                    <img draggable="false" src="/static/icons/6.png" data-name="${item['name']}" data-id="${item['id']}" class="left_edit" alt="" style="width: 20px;height: 20px; cursor: pointer;">
                            <img draggable="false" class="letf_del" data-id="${item['id']}" src="/static/icons/7.png" alt="" style="width: 20px;height: 20px; cursor: pointer;">
</div>
                </div>`
                drag()
                delete_edit()
            })
        })


});

open_madal = document.querySelector('.added')

open_madal.addEventListener('click', () => {
    madal.style.display = `flex`
})
xmark = document.querySelector('.xmark')
xmark.addEventListener('click', () => {
    madal.style.display = `none`
})

function drag() {
    let left = document.querySelector('.container_left_lists'),
        center = document.querySelector('.container_center_lists'),
        right = document.querySelector('.container_right_lists'), lists = document.querySelectorAll('.list')

    function resetImageSources() {
        const elements = document.querySelectorAll(".container_right_lists .list");
        elements.forEach((item, index) => {
            const img = item.querySelector("img");
            img.src = `../static/icons/2.png`
        })

    }

    function centerImg() {
        const elements = document.querySelectorAll(".container_center_lists .list");
        elements.forEach((item, index) => {
            const img = item.querySelector("img");
            img.src = `../static/icons/1.png`
            console.log(img)
        })

    }

    function leftImg() {
        const elements = document.querySelectorAll(".container_left_lists .list");
        elements.forEach((item, index) => {
            const img = item.querySelector("img");
            img.src = `../static/icons/3.png`
        })

    }

    lists.forEach((list, index) => {
        list.addEventListener('dragstart', (e) => {
            let selected = e.target

            left.addEventListener('dragover', (e) => {
                e.preventDefault()
            })
            left.addEventListener('drop', (e) => {
                left.appendChild(selected)
                selected = null
                leftImg()
            })
            center.addEventListener('dragover', (e) => {
                e.preventDefault()
            })
            center.addEventListener('drop', (e) => {
                center.appendChild(selected)
                selected = null
                centerImg()
            })
            right.addEventListener('dragover', (e) => {
                e.preventDefault()
            })
            right.addEventListener('drop', (e) => {
                right.appendChild(selected)
                selected = null
                resetImageSources()
            })
        })

    })
}

drag()

function api() {


    fetch('/api', {
        method: 'GET',
    })
        .then(response => response.json())

        .then(data => {
            let left = document.querySelector('.container_left_lists')
            left.innerHTML = ''
            data['do'].forEach((item, index) => {
                left.innerHTML += `<div class="container_left_lists_list list" draggable="true">
                    <img draggable="false" src="../static/icons/3.png" alt="" class="container_left_lists_img">
                    ${item['name']}<div class="edits" >
                    <img draggable="false" src="/static/icons/6.png" data-name="${item['name']}" data-id="${item['id']}" class="left_edit" alt="" style="width: 20px;height: 20px; cursor: pointer;">
                            <img  draggable="false" class="letf_del" data-id="${item['id']}" src="/static/icons/7.png" alt="" style="width: 20px;height: 20px; cursor: pointer;">
</div>
                </div>`
                drag()
                delete_edit()
                done()
            })
            let center = document.querySelector('.container_center_lists')
            center.innerHTML = ''
            data['progress'].forEach((item, index) => {
                center.innerHTML += `
                    <div class="container_center_lists_list list" draggable="true">
                    <img draggable="false" src="../static/icons/1.png" alt="" class="container_center_lists_img">
                     ${item['name']}<div class="edits" >
                    <img draggable="false" src="/static/icons/6.png" data-name="${item['name']}" data-id="${item['id']}" class="left_edit" alt="" style="width: 20px;height: 20px; cursor: pointer;">
                            <img draggable="false" class="letf_del" data-id="${item['id']}" src="/static/icons/7.png" alt="" style="width: 20px;height: 20px; cursor: pointer;">
</div>
                </div>`
                drag()
                delete_edit()
                done()
            })
            let right = document.querySelector('.container_right_lists')
            right.innerHTML = ''
            data['done'].forEach((item, index) => {
                right.innerHTML += `<div class="container_right_lists_list list" draggable="true">
                    <img draggable="false" src="../static/icons/2.png" alt="" class="container_right_lists_img">
                    ${item['name']}<div class="edits" >
                    <img draggable="false" src="/static/icons/6.png" data-name="${item['name']}" data-id="${item['id']}" class="left_edit" alt="" style="width: 20px;height: 20px; cursor: pointer;">
                            <img draggable="false" class="letf_del" data-id="${item['id']}" src="/static/icons/7.png" alt="" style="width: 20px;height: 20px; cursor: pointer;">
</div>
                </div>`
                drag()
                done()
                delete_edit()
            })


        })


}

api()


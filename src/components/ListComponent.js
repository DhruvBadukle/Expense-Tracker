import React from 'react'

const ListComponent = () => {

    let arr = [1,2,3,4,5]
    let sqArr = arr.map(no => (<li>{no*no}</li>))

    let users = [
        {uid:101, uname:"aaaa", age:34},
        {uid:102, uname:"bbbb", age:12},
        {uid:103, uname:"ccc", age:45}
    ]

    let namearr = users.map(user => (<p>{user.uname}</p>))

    let userarr = users.map(user => 
              (
                 <tr><td>{user.uid}</td><td>{user.uname}</td><td>{user.age}</td></tr>
              ))

  return (
    <div>
        Arr : {sqArr}
        User Names : {namearr}
        <table class="table table-bordered table-striped">
            {userarr}
        </table>
    </div>
  )
}

export default ListComponent
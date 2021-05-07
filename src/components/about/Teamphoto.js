import React from 'react'



export default function Teamphoto({person1_img, person2_img,person3_img}) {
    return (
            <div className='row'>
                <div className='col-12 col-sm-10 mx-auto my-4'>
                 
                    <div class="card-group">
                        <div class="card  shadow-lg p-3 mb-5 bg-white rounded">
                            <img src={person1_img}class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h5 class="card-title">Person 1</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>

                        <div class="card mx-2  shadow-lg p-3 mb-5 bg-white rounded">
                            <img src={person2_img} class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h5 class="card-title">Person 2</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div class="card  shadow-lg p-3 mb-5 bg-white rounded">
                            <img src={person3_img} class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h5 class="card-title">Person 3</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

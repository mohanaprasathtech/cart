import React from 'react'

function Products({ productItems,handleproduct }) {
    return (
    <div>
        { productItems.map((product)=>{
            return <div key={ product.id }>
               <div class="container d-flex justify-content-center mt-50 mb-50">
        <div class="row">
        <div class="col-md-10">
            <div class="card card-body">
                <div class="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
                    <div class="mr-2 mb-3 mb-lg-0"> <img src={ product.image } width="150" height="150" alt=""></img> </div>
                    <div class="media-body">
                        <h6 class="media-title font-weight-semibold"> <a href="#" data-abc="true">{ product.name }</a> </h6>
                        <ul class="list-inline list-inline-dotted mb-3 mb-lg-2">
                        </ul>
                        <p class="mb-3">{ product.description }</p>
                        <ul class="list-inline list-inline-dotted mb-0">
                            <li class="list-inline-item">Add to <a href="#" data-abc="true">wishlist</a></li>
                        </ul>
                    </div>
                    <div class="mt-3 mt-lg-0 ml-lg-3 text-center">
                        <h3 class="mb-0 font-weight-semibold">${ product.price }</h3>
                        <div> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                        <div class="text-muted">{ product.reviews }</div> <button onClick={ ()=> handleproduct(product) } type="button" class="btn btn-warning mt-4 text-white"><i class="icon-cart-add mr-2"></i> Add to cart</button>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</div>
</div>
        }) }
    </div>
    )
}

export default Products

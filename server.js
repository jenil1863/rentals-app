const express = require("express")
const app = express()
const HTTP_PORT = process.env.PORT || 8080

const exphbs = require("express-handlebars")

app.engine(".hbs",exphbs.engine({
    extname: ".hbs",
    helpers: {
        json: (context) => {return JSON.stringify(context)}
    }
}))
app.set("view engine", ".hbs")
app.get("/", (req,res) => {
    res.render("partials/home", {layout:"file"})})
 
    app.get("/all", (req,res) => {
        const rentalItems = [
            {
              id: "1",
              name: "Play Station 4",
              RentalTime: 20,
              availability: true,
              imageUrl: "https://rentalcity.ca/wp-content/uploads/2020/03/ps4-slim.jpg"
            },
            {
              id: "2",
              name: "Sony Bravia TV 46 inch",
              RentalTime: 20,
              availability: false,
              imageUrl: "https://ik.imagekit.io/rac/medias/200031389-01-update.jpg?context=bWFzdGVyfGltYWdlc3wxOTUzMjN8aW1hZ2UvanBlZ3xzeXMtbWFzdGVyL2ltYWdlcy9oNzYvaDY3LzEwMjE4MDI1NTE3MDg2LzIwMDAzMTM4OV8wMV91cGRhdGUuanBnfDU3M2U0MzEyNTY2YTllOTgyYjMyNzU5NzcyMzcxM2U4MWVmY2UzN2U1MDBkZmExOGExNjgwNDJkMTA1MzBhNDQ&alt=Sony-55-Inches-Class-X85J-Series-LED-4K-UHD-Smart-TV-KD55X85J&tr=w-286,h-190,cm-pad_resize"

            },
            {
              id: "3",
              name: "Apple Magic Keyboard",
              RentalTime: 20,
              availability: true,
              imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMR3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1645719947833"
            },
            {
              id: "4",
              name: "DualSense PS5",
              RentalTime: 20,
              availability: true,
              imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlLVKOQij1zHanSeDA0V4o3ghLyIpsalxwDQ&usqp=CAU"
            },
            {
              id: "5",
              name: "Play Station 5",
              RentalTime: 20,
              availability: false,
              imageUrl: "https://res.cloudinary.com/grover/image/upload/f_webp,q_auto/b_white,c_pad,dpr_2.0,h_500,w_520/f_auto,q_auto/v1630930141/mluuehfmcappkpjid4qu.png"

            },
            {
              id: "6",
              name: "Canon Printer",
              RentalTime: 20,
              availability: true,
              imageUrl: "https://cdn11.bigcommerce.com/s-08247/images/stencil/500x659/products/6858/9790/canon_mf247dw_1__87326.1551480793.jpg?c=2"
            }
          ];

        res.render("partials/rental",
        {layout:"file", 
        title: "Featured Items", rentals: rentalItems,
        })
    })
const onHttpStart = () => {
    console.log(`Express web server running on port: ${HTTP_PORT}`)
    console.log('Press CTRL+C to exit')
}
app.listen(HTTP_PORT, onHttpStart)
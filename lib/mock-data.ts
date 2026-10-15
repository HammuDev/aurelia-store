export type Product = { id: string; name: string; price: number; category: string; fabric: string; color: string; colors: string[]; sizes: string[]; images: string[]; colorImages: Record<string, string[]>; image: string; badge?: string; stock: number; description: string }

const gallery = (slug: string, color: string) => [1, 2, 3, 4].map(n => `/products/${slug}/${color.toLowerCase()}-${n}.jpg`)
const base = [
  ['noor','Noor Silk Abaya',8490,'New Arrivals','Nida','Black',['Black','White'],['S','M','L','XL'],'New','A fluid, softly structured abaya in premium Nida silk with a graceful drape and hidden front placket.'],
  ['mahr','Mahr Embroidered Abaya',12990,'Bridal','Chiffon','Black',['Black','White'],['S','M','L'],'Bestseller','Delicate tonal embroidery catches the light on this occasion-ready silhouette.'],
  ['safa','Safa Everyday Abaya',5490,'Daily Wear','Crepe','Black',['Black','White'],['S','M','L','XL'],undefined,'Your everyday essential, cut in easy-care crepe with a relaxed, modest fit.'],
  ['layla','Layla Open Front',6990,'Daily Wear','Nida','Black',['Black','White'],['S','M','L','XL'],undefined,'A modern open-front layer with wide sleeves and an understated satin trim.'],
  ['zoya','Zoya Pearl Abaya',9990,'Eid','Nida','Black',['Black','White'],['S','M','L'],'Limited','Pearl accents and a clean A-line cut make Zoya a celebration staple.'],
  ['areeba','Areeba Cape Abaya',7490,'Eid','Chiffon','Black',['Black','White'],['S','M','L','XL'],undefined,'An airy cape overlay brings movement and soft volume to this elegant look.'],
  ['hana','Hana Kids Abaya',3990,'Kids','Crepe','Black',['Black','White'],['4Y','6Y','8Y','10Y'],undefined,'A comfortable, playful abaya for little ones with an easy pull-on fit.'],
  ['sahar','Sahar Pleated Abaya',8790,'New Arrivals','Nida','Black',['Black','White'],['S','M','L','XL'],undefined,'Soft pleats and a flattering waist tie create an effortless daily uniform.'],
  ['inaya','Inaya Satin Abaya',10990,'Eid','Nida','Black',['Black','White'],['S','M','L'],undefined,'A luminous satin finish for evenings that call for quiet glamour.'],
  ['ramsha','Ramsha Minimal Abaya',5990,'Daily Wear','Crepe','Black',['Black','White'],['S','M','L','XL'],undefined,'Clean lines, a comfortable fit, and a polished matte finish.'],
  ['ayla','Ayla Bridal Cape',15990,'Bridal','Chiffon','Black',['Black','White'],['S','M','L'],'Bridal','A sheer chiffon cape layered over a graceful base for your most memorable moments.'],
  ['noor-mini','Noor Mini Abaya',4290,'Kids','Crepe','Black',['Black','White'],['4Y','6Y','8Y','10Y'],undefined,'A mini version of our signature Noor silhouette.'],
] as const
export const products: Product[] = base.map((p,i) => { const colorImages = { black: gallery(p[0], 'black'), white: gallery(p[0], 'white') }; return { id:p[0],name:p[1],price:p[2],category:p[3],fabric:p[4],color:p[5],colors:[...p[6]],sizes:[...p[7]],badge:p[8],description:p[9],stock:i===4?0:i<3?3:12,colorImages,images:colorImages.black,image:colorImages.black[0] } })

export const formatPrice = (value:number) => `PKR ${value.toLocaleString('en-PK')}`
export const getProduct = (id:string) => products.find(p=>p.id===id) ?? products[0]
export const cities = ['Lahore','Karachi','Islamabad','Rawalpindi','Faisalabad','Multan','Peshawar','Quetta','Sialkot','Gujranwala']
export const occasions = ['Daily','Eid','Bridal','Kids','Office']
export const productColors = ['Black','White','Ivory','Mocha','Olive','Rose','Midnight']
export const featuredEid = products.filter(p => p.category === 'Eid').slice(0, 3)
export const placeholderBlur = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PC9zdmc+'
export const customerPhotos = ['/products/noor/black-1.jpg','/products/mahr/black-2.jpg','/products/safa/black-3.jpg','/products/layla/black-4.jpg']
export const testimonials = [
  ['Ayesha K.','Lahore','The Noor drapes beautifully and arrived carefully packed.','5'],['Mariam R.','Karachi','The quality feels so considered. I will be ordering again.','5'],['Sana H.','Islamabad','A perfect fit, and the exchange process was effortless.','5'],['Iqra F.','Faisalabad','The fabric is soft, breathable and exactly as pictured.','5'],['Hiba A.','Lahore','My Eid outfit was understated and beautiful.','5'],['Zainab M.','Karachi','Beautiful craftsmanship and thoughtful packaging.','5'],
] as const

export const sizeGuide = [['S','38–40','14–15','23–24','40–42','54–56'],['M','40–42','15–16','24–25','42–44','55–57'],['L','42–44','16–17','25–26','44–46','56–58'],['XL','44–46','17–18','26–27','46–48','57–59']] as const

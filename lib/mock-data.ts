export type Product = { id: string; name: string; price: number; category: string; fabric: string; color: string; colors: string[]; sizes: string[]; images: string[]; image: string; badge?: string; stock: number; description: string }

const images = ['/products/noor-front.png','/products/mahr-detail.png','/products/safa-front.png','/products/layla-side.png','/products/noor-front.png','/products/mahr-detail.png']
const base = [
  ['noor','Noor Silk Abaya',8490,'New Arrivals','Nida','Black',['Black','Midnight'],['S','M','L','XL'],'New','A fluid, softly structured abaya in premium Nida silk with a graceful drape and hidden front placket.'],
  ['mahr','Mahr Embroidered Abaya',12990,'Bridal','Chiffon','Ivory',['Ivory','Champagne'],['S','M','L'],'Bestseller','Delicate tonal embroidery catches the light on this occasion-ready silhouette.'],
  ['safa','Safa Everyday Abaya',5490,'Daily Wear','Crepe','Mocha',['Mocha','Stone'],['S','M','L','XL'],undefined,'Your everyday essential, cut in easy-care crepe with a relaxed, modest fit.'],
  ['layla','Layla Open Front',6990,'Daily Wear','Nida','Olive',['Olive','Charcoal'],['S','M','L','XL'],undefined,'A modern open-front layer with wide sleeves and an understated satin trim.'],
  ['zoya','Zoya Pearl Abaya',9990,'Eid','Nida','Midnight',['Midnight','Black'],['S','M','L'],'Limited','Pearl accents and a clean A-line cut make Zoya a celebration staple.'],
  ['areeba','Areeba Cape Abaya',7490,'Eid','Chiffon','Sand',['Sand','Rose'],['S','M','L','XL'],undefined,'An airy cape overlay brings movement and soft volume to this elegant look.'],
  ['hana','Hana Kids Abaya',3990,'Kids','Crepe','Rose',['Rose','Sand'],['4Y','6Y','8Y','10Y'],undefined,'A comfortable, playful abaya for little ones with an easy pull-on fit.'],
  ['sahar','Sahar Pleated Abaya',8790,'New Arrivals','Nida','Charcoal',['Charcoal','Olive'],['S','M','L','XL'],undefined,'Soft pleats and a flattering waist tie create an effortless daily uniform.'],
  ['inaya','Inaya Satin Abaya',10990,'Eid','Nida','Plum',['Plum','Midnight'],['S','M','L'],undefined,'A luminous satin finish for evenings that call for quiet glamour.'],
  ['ramsha','Ramsha Minimal Abaya',5990,'Daily Wear','Crepe','Stone',['Stone','Mocha'],['S','M','L','XL'],undefined,'Clean lines, a comfortable fit, and a polished matte finish.'],
  ['ayla','Ayla Bridal Cape',15990,'Bridal','Chiffon','Champagne',['Champagne','Ivory'],['S','M','L'],'Bridal','A sheer chiffon cape layered over a graceful base for your most memorable moments.'],
  ['noor-mini','Noor Mini Abaya',4290,'Kids','Crepe','Black',['Black','Rose'],['4Y','6Y','8Y','10Y'],undefined,'A mini version of our signature Noor silhouette.'],
] as const
export const products: Product[] = base.map((p,i) => ({ id:p[0],name:p[1],price:p[2],category:p[3],fabric:p[4],color:p[5],colors:[...p[6]],sizes:[...p[7]],badge:p[8],description:p[9],stock:i===4?0:12,images:[images[i%images.length],images[(i+1)%images.length],images[(i+2)%images.length]],image:images[i%images.length] }))
export const formatPrice = (value:number) => `PKR ${value.toLocaleString('en-PK')}`
export const getProduct = (id:string) => products.find(p=>p.id===id) ?? products[0]
export const cities = ['Lahore','Karachi','Islamabad','Rawalpindi','Faisalabad','Multan','Peshawar','Quetta','Sialkot','Gujranwala']

import { Product } from './entities/product.entity';
import { ProductVariant } from './entities/product-variant.entity';
import { MikroORM } from 'mikro-orm';

(async function() {
    const orm = await MikroORM.init({
        entities: [Product, ProductVariant],
        dbName: 'product-service-test',
        type: 'mongo',
        clientUrl: 'mongodb://localhost:27017',
        baseDir: __dirname,
    });

    const p1 = new Product();
    p1.title = 'Product 1';

    const pv1 = new ProductVariant();
    pv1.title = 'Product Variant 1';

    const pv2 = new ProductVariant();
    pv2.title = 'Product Variant 2';

    p1.variants.add(pv1);
    p1.variants.add(pv2);

    await orm.em.persistAndFlush(p1);

    process.exit();
})();
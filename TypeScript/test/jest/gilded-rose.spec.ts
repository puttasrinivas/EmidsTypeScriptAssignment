import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('fixme', 40, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('fixme');
  });
  it("quality  increment with the name - 'Backstage passes to a TAFKAL80ETC concert'", () => {
    const item = new Item('Backstage passes to a TAFKAL80ETC concert',10,40);
    const gildedRose = new GildedRose([item]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(42);
  });
  it("quality decrement increment with the name - 'test", () => {
    const item = new Item('test',-1,40);
    const gildedRose = new GildedRose([item]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(38);
  });
  it("quality decrement increment with the name - 'test", () => {
    const item = new Item('hello',0,2);
    const gildedRose = new GildedRose([item]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});

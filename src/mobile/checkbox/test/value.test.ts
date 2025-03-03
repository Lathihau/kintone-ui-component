import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { MobileCheckbox } from "../index";

const initItems = [
  { label: "-----", value: "-----" },
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" }
];

describe("MobileCheckbox", () => {
  describe("value", () => {
    it("should be none checked items when not assinged on constructor", async () => {
      const container = new MobileCheckbox({ items: initItems });
      const el = await fixture(container);
      const inputsEl = el.querySelectorAll(
        ".kuc-mobile-checkbox__group__select-menu__item__input"
      );

      expect(inputsEl.length).to.equal(3);
      expect((inputsEl[0] as HTMLInputElement).checked).to.equal(false);
      expect((inputsEl[1] as HTMLInputElement).checked).to.equal(false);
      expect((inputsEl[2] as HTMLInputElement).checked).to.equal(false);
    });

    it("should be checked items when assinged on constructor", async () => {
      const container = new MobileCheckbox({
        items: initItems,
        value: [initItems[1].value]
      });
      const el = await fixture(container);
      const inputsEl = el.querySelectorAll(
        ".kuc-mobile-checkbox__group__select-menu__item__input"
      );

      expect(inputsEl.length).to.equal(3);
      expect((inputsEl[0] as HTMLInputElement).checked).to.equal(false);
      expect((inputsEl[1] as HTMLInputElement).checked).to.equal(true);
      expect((inputsEl[2] as HTMLInputElement).checked).to.equal(false);
    });

    it("should be changed value when updated by setter", async () => {
      const container = new MobileCheckbox({
        items: initItems,
        value: [initItems[1].value]
      });
      container.value = [initItems[2].value];

      const el = await fixture(container);
      const inputsEl = el.querySelectorAll(
        ".kuc-mobile-checkbox__group__select-menu__item__input"
      );

      expect(inputsEl.length).to.equal(3);
      expect((inputsEl[0] as HTMLInputElement).checked).to.equal(false);
      expect((inputsEl[1] as HTMLInputElement).checked).to.equal(false);
      expect((inputsEl[2] as HTMLInputElement).checked).to.equal(true);
    });

    it("should be throw error when set null on constructor", async () => {
      // @ts-expect-error
      const container = new MobileCheckbox({ items: initItems, value: null });
      try {
        await fixture(container);
      } catch (error) {
        let errorMessage = "'value' property is not array";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        expect(errorMessage).to.equal("'value' property is not array");
      }

      // TODO:
      // Implement checking if source code does not throw error in validateValueArray function
    });

    it("should be throw error when set null by setter", async () => {
      const container = new MobileCheckbox({
        items: initItems,
        value: [initItems[0].value]
      });
      try {
        // @ts-expect-error
        container.value = null;
        await fixture(container);
      } catch (error) {
        let errorMessage = "'value' property is not array";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        expect(errorMessage).to.equal("'value' property is not array");
      }

      // TODO:
      // Implement checking if source code does not throw error in validateValueArray function
    });

    it("should be none checked items when set [] by setter", async () => {
      const container = new MobileCheckbox({
        items: initItems,
        value: ["orange"]
      });
      const el = await fixture(container);
      const inputsEl = el.querySelectorAll(
        ".kuc-mobile-checkbox__group__select-menu__item__input"
      );
      expect(inputsEl.length).to.equal(3);
      expect((inputsEl[0] as HTMLInputElement).checked).to.equal(false);
      expect((inputsEl[1] as HTMLInputElement).checked).to.equal(true);
      expect((inputsEl[2] as HTMLInputElement).checked).to.equal(false);
      expect(container.value[0]).to.equal("orange");

      container.value = [];
      await elementUpdated(el);

      expect(inputsEl.length).to.equal(3);
      console.log("inputsEl", inputsEl);
      expect((inputsEl[0] as HTMLInputElement).checked).to.equal(false);
      expect((inputsEl[1] as HTMLInputElement).checked).to.equal(false);
      expect((inputsEl[2] as HTMLInputElement).checked).to.equal(false);
      expect(container.value.length).to.equal(0);
    });

    it("should be none checked items when set [] on constructor", async () => {
      const container = new MobileCheckbox({ items: initItems, value: [] });
      const el = await fixture(container);
      const inputsEl = el.querySelectorAll(
        ".kuc-mobile-checkbox__group__select-menu__item__input"
      );
      expect(inputsEl.length).to.equal(3);
      expect((inputsEl[0] as HTMLInputElement).checked).to.equal(false);
      expect((inputsEl[1] as HTMLInputElement).checked).to.equal(false);
      expect((inputsEl[2] as HTMLInputElement).checked).to.equal(false);
      expect(container.value.length).to.equal(0);
    });
  });
});

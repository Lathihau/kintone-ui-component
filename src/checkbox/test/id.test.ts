import { expect, fixture } from "@open-wc/testing";
import { Checkbox } from "../index";

describe("Checkbox", () => {
  describe("id", () => {
    it('should be "" when not assigning on constructor', async () => {
      const container = new Checkbox();

      const el = await fixture(container);
      expect(el.id).to.equal("");
    });

    it('should be "options-id" when assigning on constructor', async () => {
      const container = new Checkbox({ id: "options-id" });

      const el = await fixture(container);
      expect(el.id).to.equal("options-id");
    });

    it('should be replaced to "replace-id" after changing by setter', async () => {
      const container = new Checkbox({ id: "options-id" });

      const el = await fixture(container);
      container.id = "replace-id";
      expect(el.id).to.equal("replace-id");
    });
  });
});

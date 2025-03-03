import { expect } from "@open-wc/testing";
import { padStart } from "../../utils";
import {
  generateTimeOptions,
  formatTimeValueToInputValue,
  formatInputValueToTimeValue,
  formatInputValueToValue,
  formatValueToInputValue,
  getTodayStringByLocale,
  isValidDateFormat,
  convertTime24To12,
  convertTime12To24
} from "../";

describe("BaseDateTimeUtils", () => {
  describe("generateTimeOptions", () => {
    it("should be return 24 option when using generateTimeOptions with 12 hour format and timeStep is 60", async () => {
      const timeOptions = generateTimeOptions(true, 60);
      expect(timeOptions.length).to.be.equal(24);
    });
  });

  describe("generateTimeOptions", () => {
    it("should be return 48 option when using generateTimeOptions with 24 hour format timeStep is 30", async () => {
      const timeOptions = generateTimeOptions(false, 30);
      expect(timeOptions.length).to.be.equal(48);
    });
  });

  describe("formatTimeValueToInputValue", () => {
    it("should be return 12 hour format when using formatTimeValueToInputValue", async () => {
      const resp = formatTimeValueToInputValue("1:1", true);
      expect(resp.hours).to.be.equal("01");
      expect(resp.minutes).to.be.equal("01");
      expect(resp.suffix).to.be.equal("AM");
    });
  });

  describe("formatTimeValueToInputValue", () => {
    it("should be return 24 hour format when using formatTimeValueToInputValue", async () => {
      const resp = formatTimeValueToInputValue("13:1", false);
      expect(resp.hours).to.be.equal("13");
      expect(resp.minutes).to.be.equal("01");
      expect(resp.suffix).to.be.equal("");
    });
  });

  describe("formatTimeValueToInputValue", () => {
    it("should be return empty when using formatTimeValueToInputValue with invalid parameter", async () => {
      const resp = formatTimeValueToInputValue(":1", true);
      expect(resp.hours).to.be.equal("");
      expect(resp.minutes).to.be.equal("");
      expect(resp.suffix).to.be.equal("");
    });
  });

  describe("formatInputValueToTimeValue", () => {
    it("should be return 24 hour format when using formatInputValueToTimeValue", async () => {
      const resp = formatInputValueToTimeValue("01:15 PM");
      expect(resp).to.be.equal("13:15");
    });
  });

  describe("formatInputValueToTimeValue", () => {
    it("should be return input value when using formatInputValueToTimeValue with parameter invalid", async () => {
      const resp = formatInputValueToTimeValue("01:15");
      expect(resp).to.be.equal("01:15");
    });
  });

  describe("formatValueToInputValue", () => {
    it("should be return invalid value when using formatValueToInputValue", async () => {
      const resp = formatValueToInputValue("ja", "2021-12-27-99");
      expect(resp).to.be.equal("2021-12-27-99");
    });
  });

  describe("formatValueToInputValue", () => {
    it("should be return empty when using formatValueToInputValue", async () => {
      const resp = formatValueToInputValue("ja", "");
      expect(resp).to.be.equal("");
    });
  });

  describe("formatInputValueToValue", () => {
    it("should be return empty when using formatInputValueToValue with value is empty", async () => {
      const resp = formatInputValueToValue("en", "");
      expect(resp).to.be.equal("");
    });
  });

  describe("getTodayStringByLocale", () => {
    it("should be return zh time format when using zh parameter", async () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = padStart(today.getMonth() + 1);
      const day = padStart(today.getDate());
      const todayValue = year + "-" + month + "-" + day;

      const resp = getTodayStringByLocale("zh");
      expect(resp).to.be.equal(todayValue);
    });
  });

  describe("getTodayStringByLocale", () => {
    it("should be return en time format when using en parameter", async () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = padStart(today.getMonth() + 1);
      const day = padStart(today.getDate());
      const todayValue = month + "/" + day + "/" + year;

      const resp = getTodayStringByLocale("en");
      expect(resp).to.be.equal(todayValue);
    });
  });

  describe("isValidDateFormat", () => {
    it("should be return false when using invalid paramter", async () => {
      const resp = isValidDateFormat("en", "2021-12-27");
      expect(resp).to.be.equal(false);
    });
  });

  describe("convertTime24To12", () => {
    it("should be return suffix PM when hour greater than to 12", async () => {
      const resp = convertTime24To12(13, 30);
      expect(resp.suffix).to.be.equal("PM");
    });
  });

  describe("convertTime24To12", () => {
    it("should be return hour is 01 when hours equal to 13", async () => {
      const resp = convertTime24To12(13, 30);
      expect(resp.hours).to.be.equal("01");
    });
  });

  describe("convertTime12To24", () => {
    it("should be return hour is 00 when hours equal to 12AM", async () => {
      const resp = convertTime12To24("12", "AM");
      expect(resp).to.be.equal("00");
    });
  });
});

import { describe, expect, it } from "vitest";

import {
    resolveAdSenseSlot,
    shouldMountArrivalsRail,
    shouldRenderConsultarPageRail,
} from "./placement";

describe("resolveAdSenseSlot", () => {
    it("usa el slot específico si está definido", () => {
        expect(resolveAdSenseSlot(" 111 ", "222")).toBe("111");
    });

    it("cae al de consultar si arrivals/favoritos está vacío", () => {
        expect(resolveAdSenseSlot("", " 333 ")).toBe("333");
        expect(resolveAdSenseSlot(undefined, "333")).toBe("333");
    });

    it("no renderiza nada si no hay ningún slot", () => {
        expect(resolveAdSenseSlot(undefined, undefined)).toBeUndefined();
        expect(resolveAdSenseSlot("  ", "")).toBeUndefined();
    });
});

describe("shouldRenderConsultarPageRail", () => {
    it("se muestra en el form de /consultar (mobile y desktop)", () => {
        expect(shouldRenderConsultarPageRail({ isConsulting: false, isDesktop: false })).toBe(
            true,
        );
        expect(shouldRenderConsultarPageRail({ isConsulting: false, isDesktop: true })).toBe(
            true,
        );
    });

    it("se oculta en mobile cuando el overlay de arribos cubre la página", () => {
        expect(shouldRenderConsultarPageRail({ isConsulting: true, isDesktop: false })).toBe(
            false,
        );
    });

    it("sigue visible en desktop: el form no queda tapado", () => {
        expect(shouldRenderConsultarPageRail({ isConsulting: true, isDesktop: true })).toBe(
            true,
        );
    });
});

describe("shouldMountArrivalsRail", () => {
    it("se monta al consultar, aunque los arribos estén cargando (poll 25s)", () => {
        expect(shouldMountArrivalsRail(true)).toBe(true);
    });

    it("no se monta fuera de una consulta", () => {
        expect(shouldMountArrivalsRail(false)).toBe(false);
    });
});

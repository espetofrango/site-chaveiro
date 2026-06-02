declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"chave-codificada-anchieta-rj.md": {
	id: "chave-codificada-anchieta-rj.md";
  slug: "chave-codificada-anchieta-rj";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"chave-emperrada-fechadura-anchieta.md": {
	id: "chave-emperrada-fechadura-anchieta.md";
  slug: "chave-emperrada-fechadura-anchieta";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"chave-mestra-condominios-anchieta.md": {
	id: "chave-mestra-condominios-anchieta.md";
  slug: "chave-mestra-condominios-anchieta";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"chave-quebrada-dentro-fechadura-anchieta.md": {
	id: "chave-quebrada-dentro-fechadura-anchieta.md";
  slug: "chave-quebrada-dentro-fechadura-anchieta";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"chave-trancada-carro-anchieta.md": {
	id: "chave-trancada-carro-anchieta.md";
  slug: "chave-trancada-carro-anchieta";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"chaveiro-24h-em-anchieta-rj.md": {
	id: "chaveiro-24h-em-anchieta-rj.md";
  slug: "chaveiro-24h-em-anchieta-rj";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"chaveiro-automotivo-anchieta.md": {
	id: "chaveiro-automotivo-anchieta.md";
  slug: "chaveiro-automotivo-anchieta";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"chaveiro-domingo-feriado-anchieta.md": {
	id: "chaveiro-domingo-feriado-anchieta.md";
  slug: "chaveiro-domingo-feriado-anchieta";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"conserto-chave-canivete-anchieta.md": {
	id: "conserto-chave-canivete-anchieta.md";
  slug: "conserto-chave-canivete-anchieta";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"copia-chave-reserva-carros-anchieta.md": {
	id: "copia-chave-reserva-carros-anchieta.md";
  slug: "copia-chave-reserva-carros-anchieta";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"copia-de-chaves-em-anchieta.md": {
	id: "copia-de-chaves-em-anchieta.md";
  slug: "copia-de-chaves-em-anchieta";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"emergencias-trincos-fechaduras-anchieta.md": {
	id: "emergencias-trincos-fechaduras-anchieta.md";
  slug: "emergencias-trincos-fechaduras-anchieta";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fechadura-digital-comercio-anchieta.md": {
	id: "fechadura-digital-comercio-anchieta.md";
  slug: "fechadura-digital-comercio-anchieta";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fechadura-tetra-anchieta-custo-beneficio.md": {
	id: "fechadura-tetra-anchieta-custo-beneficio.md";
  slug: "fechadura-tetra-anchieta-custo-beneficio";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"instalacao-olho-magico-travas-anchieta.md": {
	id: "instalacao-olho-magico-travas-anchieta.md";
  slug: "instalacao-olho-magico-travas-anchieta";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"manutencao-fechaduras-molas-anchieta.md": {
	id: "manutencao-fechaduras-molas-anchieta.md";
  slug: "manutencao-fechaduras-molas-anchieta";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"perdi-chave-de-casa-anchieta.md": {
	id: "perdi-chave-de-casa-anchieta.md";
  slug: "perdi-chave-de-casa-anchieta";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"perdi-chave-portao-cadeado-anchieta.md": {
	id: "perdi-chave-portao-cadeado-anchieta.md";
  slug: "perdi-chave-portao-cadeado-anchieta";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"seguranca-fechaduras-auxiliares-anchieta.md": {
	id: "seguranca-fechaduras-auxiliares-anchieta.md";
  slug: "seguranca-fechaduras-auxiliares-anchieta";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"seguranca-portas-aco-comerciais.md": {
	id: "seguranca-portas-aco-comerciais.md";
  slug: "seguranca-portas-aco-comerciais";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"sistema-transponder-chave-carro-anchieta.md": {
	id: "sistema-transponder-chave-carro-anchieta.md";
  slug: "sistema-transponder-chave-carro-anchieta";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}

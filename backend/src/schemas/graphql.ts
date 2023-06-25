
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class NewBeastClass {
    name: string;
}

export class UpdateBeastClass {
    id: string;
    name: string;
}

export class NewBeastDetails {
    beastId: number;
    description: string;
    inGameDescription: string;
    imgLink: string;
    tacticDescription: string;
    name: string;
}

export class UpdateBeastDetails {
    id: string;
    description: string;
    inGameDescription: string;
    imgLink: string;
    tacticDescription: string;
    name: string;
}

export class NewBeast {
    beastClassId: number;
    name: string;
}

export class UpdateBeast {
    id: string;
    beastClassId: number;
    name: string;
}

export class NewDrop {
    name: string;
}

export class UpdateDrop {
    id: string;
    name: string;
}

export class NewLocation {
    name: string;
}

export class UpdateLocation {
    id: string;
    name: string;
}

export class NewWeakness {
    name: string;
}

export class UpdateWeakness {
    id: string;
    name: string;
}

export class BeastClass {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
}

export abstract class IQuery {
    abstract beastsClasses(): BeastClass[] | Promise<BeastClass[]>;

    abstract beastClass(id: string): Nullable<BeastClass> | Promise<Nullable<BeastClass>>;

    abstract beastDetails(id: string): Nullable<BeastDetails> | Promise<Nullable<BeastDetails>>;

    abstract beasts(): Beast[] | Promise<Beast[]>;

    abstract beast(id: string): Nullable<Beast> | Promise<Nullable<Beast>>;

    abstract drops(): Drop[] | Promise<Drop[]>;

    abstract drop(id: string): Nullable<Drop> | Promise<Nullable<Drop>>;

    abstract locations(): Location[] | Promise<Location[]>;

    abstract location(id: string): Nullable<Location> | Promise<Nullable<Location>>;

    abstract weaknesses(): Weakness[] | Promise<Weakness[]>;

    abstract weakness(id: string): Nullable<Weakness> | Promise<Nullable<Weakness>>;
}

export abstract class IMutation {
    abstract createBeastClass(input: NewBeastClass): BeastClass | Promise<BeastClass>;

    abstract updateBeastClass(input: UpdateBeastClass): BeastClass | Promise<BeastClass>;

    abstract deleteBeastClass(id: string): BeastClass | Promise<BeastClass>;

    abstract createBeastDetails(input: NewBeastDetails): BeastDetails | Promise<BeastDetails>;

    abstract updateBeastDetails(input: UpdateBeastDetails): BeastDetails | Promise<BeastDetails>;

    abstract deleteBeastDetails(id: string): BeastDetails | Promise<BeastDetails>;

    abstract createBeast(input: NewBeast): Beast | Promise<Beast>;

    abstract updateBeast(input: UpdateBeast): Beast | Promise<Beast>;

    abstract deleteBeast(id: string): Beast | Promise<Beast>;

    abstract createDrop(input: NewDrop): Drop | Promise<Drop>;

    abstract updateDrop(input: UpdateDrop): Drop | Promise<Drop>;

    abstract deleteDrop(id: string): Drop | Promise<Drop>;

    abstract createLocation(input: NewLocation): Location | Promise<Location>;

    abstract updateLocation(input: UpdateLocation): Location | Promise<Location>;

    abstract deleteLocation(id: string): Location | Promise<Location>;

    abstract createWeakness(input: NewWeakness): Weakness | Promise<Weakness>;

    abstract updateWeakness(input: UpdateWeakness): Weakness | Promise<Weakness>;

    abstract deleteWeakness(id: string): Weakness | Promise<Weakness>;
}

export class BeastDetails {
    id: string;
    createdAt: string;
    updatedAt: string;
    beastId: number;
    description: string;
    inGameDescription: string;
    imgLink: string;
    tacticDescription: string;
    name: string;
}

export class Beast {
    id: string;
    createdAt: string;
    updatedAt: string;
    beastClass: BeastClass;
    name: string;
}

export class Drop {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
}

export class Location {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
}

export class Schema {
    query?: Nullable<IQuery>;
    mutation?: Nullable<IMutation>;
}

export class Weakness {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
}

type Nullable<T> = T | null;

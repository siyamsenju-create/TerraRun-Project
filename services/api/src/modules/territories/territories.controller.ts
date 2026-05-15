import { Controller, Get, Param, Query } from "@nestjs/common";
import { TerritoriesService } from "./territories.service";

@Controller()
export class TerritoriesController {
  constructor(private readonly territoriesService: TerritoriesService) {}

  @Get("territories/map")
  getMap(
    @Query("minLng") minLng?: string,
    @Query("minLat") minLat?: string,
    @Query("maxLng") maxLng?: string,
    @Query("maxLat") maxLat?: string,
    @Query("zoom") zoom?: string,
  ) {
    return this.territoriesService.getMap({ minLng, minLat, maxLng, maxLat, zoom });
  }

  @Get("territory/:cellId")
  getTerritory(@Param("cellId") cellId: string) {
    return this.territoriesService.getTerritory(cellId);
  }
}


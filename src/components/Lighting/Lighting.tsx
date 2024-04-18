import { SpotLight } from "@react-three/drei";

const Lighting = () => {
  const white = "#FFFFFF";
  const lightIntensity = 500;
  const lightDistance = 30;
  const shadowResolution = 1024;
  const shadowBias = -0.0009;
  const spotlightHeight = 5

  const spotlightParams = {
    directionalLightIntensity: 1,
    directionalLightX: 0,
    directionalLightY: 30,
    directionalLightZ: 0,

    topSpotlightColor: white,
    topSpotlightIntensity: 100,
    topSpotlightAngle: 2.41,
    topSpotlightPenumbra: 0,
    topSpotlightDistance: 45,
    topSpotlightX: 0,
    topSpotlightY: 15,
    topSpotlightZ: 0,

    frontSpotlightColor: white,
    frontSpotlightIntensity: lightIntensity,
    frontSpotlightAngle: 1.5,
    frontSpotlightPenumbra: 0,
    frontSpotlightDistance: lightDistance,
    frontSpotlightX: -20,
    frontSpotlightY: spotlightHeight,
    frontSpotlightZ: 10,

    rearSpotlightColor: white,
    rearSpotlightIntensity: lightIntensity,
    rearSpotlightAngle: 1.5,
    rearSpotlightPenumbra: 1,
    rearSpotlightDistance: lightDistance,
    rearSpotlightX: 20,
    rearSpotlightY: spotlightHeight,
    rearSpotlightZ: -10,

    rightSpotlightColor: white,
    rightSpotlightIntensity: lightIntensity,
    rightSpotlightAngle: 1,
    rightSpotlightPenumbra: 1,
    rightSpotlightDistance: lightDistance,
    rightSpotlightX: -10,
    rightSpotlightY: spotlightHeight,
    rightSpotlightZ: -20,

    leftSpotlightColor: white,
    leftSpotlightIntensity: lightIntensity,
    leftSpotlightAngle: 1,
    leftSpotlightPenumbra: 1,
    leftSpotlightDistance: lightDistance,
    leftSpotlightX: 10,
    leftSpotlightY: spotlightHeight,
    leftSpotlightZ: 20,
  };

  return (
    <>
      <group name="lights">
        {/* lighting for testing/development */}
        <ambientLight intensity={1} />

        <directionalLight
          intensity={spotlightParams.directionalLightIntensity}
          position={[
            spotlightParams.directionalLightX,
            spotlightParams.directionalLightY,
            spotlightParams.directionalLightZ,
          ]}
          castShadow
          shadow-bias={shadowBias}
          shadow-mapSize={[shadowResolution, shadowResolution]}
        />

        <SpotLight
          color={spotlightParams.topSpotlightColor}
          intensity={spotlightParams.topSpotlightIntensity}
          distance={spotlightParams.topSpotlightDistance}
          angle={spotlightParams.topSpotlightAngle}
          penumbra={spotlightParams.topSpotlightPenumbra}
          position={[
            spotlightParams.topSpotlightX,
            spotlightParams.topSpotlightY,
            spotlightParams.topSpotlightZ,
          ]}
          castShadow
          shadow-bias={shadowBias}
          shadow-mapSize={[shadowResolution, shadowResolution]}
        />
      </group>
    </>
  );
};

export default Lighting;

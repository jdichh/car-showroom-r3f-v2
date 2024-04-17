import { SpotLight } from "@react-three/drei";

const Lighting = () => {
  const white = "#FFFFFF";
  const lightIntensity = 250;
  const lightDistance = 50;
  const shadowResolution = 1024;
  const shadowBias = -0.0012;

  const spotlightParams = {
    directionalLightIntensity: 0.0075,
    directionalLightX: 0,
    directionalLightY: 30,
    directionalLightZ: 0,

    topSpotlightColor: white,
    topSpotlightIntensity: lightIntensity,
    topSpotlightAngle: 2.5,
    topSpotlightPenumbra: 1.9,
    topSpotlightDistance: 45,
    topSpotlightX: 0,
    topSpotlightY: 12,
    topSpotlightZ: 0,

    frontSpotlightColor: white,
    frontSpotlightIntensity: lightIntensity,
    frontSpotlightAngle: 1.5,
    frontSpotlightPenumbra: 1,
    frontSpotlightDistance: lightDistance,
    frontSpotlightX: -20,
    frontSpotlightY: 5,
    frontSpotlightZ: 10,

    rearSpotlightColor: white,
    rearSpotlightIntensity: lightIntensity,
    rearSpotlightAngle: 1.5,
    rearSpotlightPenumbra: 0.65,
    rearSpotlightDistance: lightDistance,
    rearSpotlightX: 20,
    rearSpotlightY: 5,
    rearSpotlightZ: -10,

    rightSpotlightColor: white,
    rightSpotlightIntensity: lightIntensity,
    rightSpotlightAngle: 1,
    rightSpotlightPenumbra: 1,
    rightSpotlightDistance: lightDistance,
    rightSpotlightX: -10,
    rightSpotlightY: 5,
    rightSpotlightZ: -20,

    leftSpotlightColor: white,
    leftSpotlightIntensity: lightIntensity,
    leftSpotlightAngle: 1,
    leftSpotlightPenumbra: 1,
    leftSpotlightDistance: lightDistance,
    leftSpotlightX: 10,
    leftSpotlightY: 5,
    leftSpotlightZ: 20,
  };

  return (
    <>
      <group name="lights">
        {/* lighting for testing/development */}
        {/* <ambientLight intensity={0.75} /> */}

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

        <SpotLight
          color={spotlightParams.frontSpotlightColor}
          intensity={spotlightParams.frontSpotlightIntensity}
          distance={spotlightParams.frontSpotlightDistance}
          angle={spotlightParams.frontSpotlightAngle}
          penumbra={spotlightParams.frontSpotlightPenumbra}
          position={[
            spotlightParams.frontSpotlightX,
            spotlightParams.frontSpotlightY,
            spotlightParams.frontSpotlightZ,
          ]}
          castShadow
          shadow-bias={shadowBias}
          shadow-mapSize={[shadowResolution, shadowResolution]}
        />

        <SpotLight
          color={spotlightParams.rearSpotlightColor}
          intensity={spotlightParams.rearSpotlightIntensity}
          distance={spotlightParams.rearSpotlightDistance}
          angle={spotlightParams.rearSpotlightAngle}
          penumbra={spotlightParams.rearSpotlightPenumbra}
          position={[
            spotlightParams.rearSpotlightX,
            spotlightParams.rearSpotlightY,
            spotlightParams.rearSpotlightZ,
          ]}
          castShadow
          shadow-bias={shadowBias}
          shadow-mapSize={[shadowResolution, shadowResolution]}
        />

        <SpotLight
          color={spotlightParams.leftSpotlightColor}
          intensity={spotlightParams.leftSpotlightIntensity}
          distance={spotlightParams.leftSpotlightDistance}
          angle={spotlightParams.leftSpotlightAngle}
          penumbra={spotlightParams.leftSpotlightPenumbra}
          position={[
            spotlightParams.leftSpotlightX,
            spotlightParams.leftSpotlightY,
            spotlightParams.leftSpotlightZ,
          ]}
          castShadow
          shadow-bias={shadowBias}
          shadow-mapSize={[shadowResolution, shadowResolution]}
        />

        <SpotLight
          color={spotlightParams.rightSpotlightColor}
          intensity={spotlightParams.rightSpotlightIntensity}
          distance={spotlightParams.rightSpotlightDistance}
          angle={spotlightParams.rightSpotlightAngle}
          penumbra={spotlightParams.rightSpotlightPenumbra}
          position={[
            spotlightParams.rightSpotlightX,
            spotlightParams.rightSpotlightY,
            spotlightParams.rightSpotlightZ,
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
